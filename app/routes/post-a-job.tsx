import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { convertToSlugNanoId } from "@/lib/string";
import { newJobFormSchema } from "@/modules/job/schema";
import { useForm, type SubmissionResult } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "react-router";
import type { z } from "zod";
import type { Route } from "./+types/post-a-job";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create New Job - Goosejob" },
    {
      name: "description",
      content: "Post a new job for anyone to apply.",
    },
  ];
}

export async function loader({ request }: Route.ActionArgs) {
  const count = await prisma.job.count();
  return { count };
}

export async function action({ request }: Route.ActionArgs) {
  const submission = parseWithZod(await request.formData(), {
    schema: newJobFormSchema,
  });
  if (submission.status !== "success") return submission.reply();

  const { organizationSlug, statusSlug, ...inputValue } = submission.value;

  const newJob = await prisma.job.create({
    data: {
      ...inputValue,
      organization: { connect: { slug: organizationSlug } },
      status: { connect: { slug: statusSlug } },
      slug: convertToSlugNanoId(
        organizationSlug,
        inputValue.title,
        inputValue.level
      ),
    },
  });

  return redirect(`/jobs/${newJob.slug}`);
}

export default function Route({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        <div className="w-full max-w-xl space-y-4">
          <CreateNewJobForm lastResult={actionData} />
        </div>

        <div className="space-y-3 w-full max-w-md">
          <Card>
            <CardContent className="min-h-96">
              <span>Preview Here</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export function CreateNewJobForm({
  lastResult,
}: {
  lastResult: SubmissionResult<string[]> | undefined;
}) {
  const [form, fields] = useForm<z.infer<typeof newJobFormSchema>>({
    shouldValidate: "onBlur",
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: newJobFormSchema });
    },
    defaultValue: {
      organizationSlug: "organization-slug",
      title: "Job Title",
      level: "Job Level",
      salaryCurrency: "USD",
      salaryMin: 50_000,
      salaryMax: 100_000,
      experienceMin: 1,
      experienceMax: 5,
      types: [],
      workplaceTypes: [],
      description:
        "Please write a clear enough job description with at least 100 characters. So the candidates would know that you're serious...",
      benefits: "Please list all job benefits...",
      skills: [],
    },
  });

  return (
    <form
      method="post"
      id={form.id}
      onSubmit={form.onSubmit}
      className="space-y-4"
    >
      <div>
        <Label>Organization / Company / School</Label>
        <div className="flex gap-2 items-center">
          <Input
            name={fields.organizationSlug.name}
            defaultValue={fields.organizationSlug.initialValue}
            placeholder="organization-slug"
          />
          <div className="aspect-square">
            <img
              src="https://lh3.googleusercontent.com/kKaWGqBLttri7RicHIgIiroIE3ufOjGdcEckhMKji4BlT_jlEYxUwUFtFrCoFqHqJE9f6DgFTSrTh4Tz3ykcoW56P_ZuDmC_IUu8LSFY7JzkpE4Ul0FD"
              alt="Organization Logo"
              className="object-contain size-10 bg-muted rounded"
            />
          </div>
        </div>
        {fields.organizationSlug.errors && (
          <FormMessage>{fields.organizationSlug.errors}</FormMessage>
        )}
      </div>

      <div>
        <Label>Job Title</Label>
        <Input
          name={fields.title.name}
          defaultValue={fields.title.initialValue}
          placeholder="e.g. Software Engineer"
        />
        {fields.title.errors && (
          <FormMessage>{fields.title.errors}</FormMessage>
        )}
      </div>

      <div>
        <Label>Job Level</Label>
        <Input
          name={fields.level.name}
          defaultValue={fields.level.initialValue}
          placeholder="e.g. Senior"
        />
        {fields.level.errors && (
          <FormMessage>{fields.level.errors}</FormMessage>
        )}
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <Label>Min. Salary</Label>
          <Input
            name={fields.salaryMin.name}
            defaultValue={fields.salaryMin.initialValue}
            type="number"
            step={1000}
          />
          {fields.salaryMin.errors && (
            <FormMessage>{fields.salaryMin.errors}</FormMessage>
          )}
        </div>

        <div className="flex-1">
          <Label>Max. Salary</Label>
          <Input
            name={fields.salaryMax.name}
            defaultValue={fields.salaryMax.initialValue}
            type="number"
            step={1000}
          />
          {fields.salaryMax.errors && (
            <FormMessage>{fields.salaryMax.errors}</FormMessage>
          )}
        </div>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1">
          <Label>Min. Experience (years)</Label>
          <Input
            name={fields.experienceMin.name}
            defaultValue={fields.experienceMin.initialValue}
            type="number"
          />
          {fields.experienceMin.errors && (
            <FormMessage>{fields.experienceMin.errors}</FormMessage>
          )}
        </div>

        <div className="flex-1">
          <Label>Max. Experience (years)</Label>
          <Input
            name={fields.experienceMax.name}
            defaultValue={fields.experienceMax.initialValue}
            type="number"
          />
          {fields.experienceMax.errors && (
            <FormMessage>{fields.experienceMax.errors}</FormMessage>
          )}
        </div>
      </div>

      <div>
        <Label>Job Description</Label>
        <Textarea
          name={fields.description.name}
          defaultValue={fields.description.initialValue}
          placeholder="Enter job description"
        />
        {fields.description.errors && (
          <FormMessage>{fields.description.errors}</FormMessage>
        )}
      </div>

      <div>
        <Label>Job Benefits</Label>
        <Textarea
          name={fields.benefits.name}
          defaultValue={fields.benefits.initialValue}
          placeholder="Enter job benefits"
        />
        {fields.benefits.errors && (
          <FormMessage>{fields.benefits.errors}</FormMessage>
        )}
      </div>

      <div className="flex">
        <Button type="submit" className="flex-[1]">
          Add New Job
        </Button>
      </div>
    </form>
  );
}

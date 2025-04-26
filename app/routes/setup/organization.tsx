import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { convertToSlugNanoId } from "@/lib/string";
import { NewOrganizationSchema } from "@/modules/organization/schema";
import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { getZodConstraint, parseWithZod } from "@conform-to/zod";
import { Form, href, redirect, useNavigation } from "react-router";
import type { Route } from "./+types/organization";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create New Organization - Goosejob" },
    {
      name: "description",
      content: "Setup a new organization before posting a job.",
    },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema: NewOrganizationSchema });
  if (submission.status !== "success") return submission.reply();

  try {
    const organization = await prisma.organization.create({
      data: {
        ...submission.value,
        slug: convertToSlugNanoId(submission.value.name),
      },
    });

    return redirect(href("/organizations/:slug", { slug: organization.slug }));
  } catch (error) {
    console.error(error);
    return submission.reply({
      formErrors: ["Failed to create organization. Please try again."],
    });
  }
}

export default function OrganizationsNewRoute({
  actionData,
}: Route.ComponentProps) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [form, fields] = useForm({
    lastResult: actionData,
    constraint: getZodConstraint(NewOrganizationSchema),
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: NewOrganizationSchema });
    },
  });

  return (
    <div className="container max-w-2xl">
      <Card className="border-none p-0 shadow-none">
        <CardHeader>
          <CardTitle>Create New Organization</CardTitle>
          <CardDescription>
            Fill in the details about your organization to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...getFormProps(form)} method="post" className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor={fields.name.id}>Organization Name</Label>
              <Input {...getInputProps(fields.name, { type: "text" })} />
              <FormMessage id={fields.name.errorId}>
                {fields.name.errors}
              </FormMessage>
            </div>

            <div className="space-y-2">
              <Label htmlFor={fields.tagline.id}>Tagline</Label>
              <Input {...getInputProps(fields.tagline, { type: "text" })} />
              <FormMessage id={fields.tagline.errorId}>
                {fields.tagline.errors}
              </FormMessage>
            </div>

            <div className="space-y-2">
              <Label htmlFor={fields.description.id}>Description</Label>
              <Textarea
                {...getInputProps(fields.description, { type: "text" })}
                className="min-h-[100px]"
              />
              <FormMessage id={fields.description.errorId}>
                {fields.description.errors}
              </FormMessage>
            </div>

            <div className="space-y-2">
              <Label htmlFor={fields.location.id}>
                Location (City, Country)
              </Label>
              <Input {...getInputProps(fields.location, { type: "text" })} />
              <FormMessage id={fields.location.errorId}>
                {fields.location.errors}
              </FormMessage>
            </div>

            <div className="space-y-2">
              <Label htmlFor={fields.websiteUrl.id}>Website URL</Label>
              <Input
                {...getInputProps(fields.websiteUrl, { type: "url" })}
                placeholder="https://example.com"
                className="font-mono"
              />
              <FormMessage id={fields.websiteUrl.errorId}>
                {fields.websiteUrl.errors}
              </FormMessage>
            </div>

            <div className="space-y-2">
              <Label htmlFor={fields.logoUrl.id}>Logo URL</Label>
              <Input
                {...getInputProps(fields.logoUrl, { type: "url" })}
                placeholder="https://github.com/example.png"
                className="font-mono"
              />
              <FormMessage id={fields.logoUrl.errorId}>
                {fields.logoUrl.errors}
              </FormMessage>
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Organization"}
            </Button>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

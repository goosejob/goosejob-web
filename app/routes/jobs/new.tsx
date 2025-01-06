import { useForm } from "react-hook-form";

import type { Route } from "./+types/list";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Create New Job - Goosejob" },
    {
      name: "description",
      content: "Post a new job for anyone to apply.",
    },
  ];
}

export default function Route() {
  return (
    <div className="flex flex-wrap gap-8">
      <div className="w-full max-w-xl space-y-4">
        <CreateNewJobForm />
      </div>

      <div className="space-y-3 w-full max-w-md">
        <h2 className="text-sm font-medium leading-none">Preview</h2>
        <Card>
          <CardContent className="min-h-96"></CardContent>
        </Card>
      </div>
    </div>
  );
}

const jobTypeOptions = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
];

const workplaceTypeOptions = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "On-site" },
  { value: "hybrid", label: "Hybrid" },
];

const newJobFormSchema = z.object({
  organizationSlug: z.string().nonempty("Organization is required"),
  jobTitle: z.string().nonempty("Job title is required"),
  jobLevel: z.string().nonempty("Job level is required"), // junior, mid, senior
  currency: z.string().nonempty("Currency is required"),
  rateType: z.enum(["hourly", "monthly", "yearly"]),
  salaryMin: z.number().min(0, "Minimum salary must be 0 or greater"),
  salaryMax: z.number().min(0, "Maximum salary must be 0 or greater"),
  experienceMin: z.number().min(0, "Minimum experience must be 0 or greater"),
  experienceMax: z.number().min(0, "Maximum experience must be 0 or greater"),
  jobTypes: z.array(z.string()).nonempty("Select at least one job type"),
  workplaceTypes: z
    .array(z.string())
    .nonempty("Select at least one workplace type"),
  description: z
    .string()
    .min(140, "Job description need at least 140 characters"),
  benefits: z.string().min(20, "Benefits need at least 20 characters"),
  skills: z.array(z.string()), // typescript, python, react, rest-api, graphql
});

type FormValues = z.infer<typeof newJobFormSchema>;

export function CreateNewJobForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(newJobFormSchema),
    defaultValues: {
      organizationSlug: "",
      jobTitle: "",
      jobLevel: "",
      currency: "",
      salaryMin: 0,
      salaryMax: 0,
      experienceMin: 0,
      experienceMax: 0,
      jobTypes: [],
      workplaceTypes: [],
      description: "",
      benefits: "",
      skills: [],
    },
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="organizationSlug"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Organization / Company / School</FormLabel>
            <div className="flex gap-2 items-center">
              <FormControl>
                <Input placeholder="SELECT" {...field} />
              </FormControl>
              <div className="aspect-square">
                <img
                  src="https://lh3.googleusercontent.com/kKaWGqBLttri7RicHIgIiroIE3ufOjGdcEckhMKji4BlT_jlEYxUwUFtFrCoFqHqJE9f6DgFTSrTh4Tz3ykcoW56P_ZuDmC_IUu8LSFY7JzkpE4Ul0FD"
                  alt="Organization Logo"
                  className="object-contain size-10 bg-muted rounded"
                />
              </div>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="jobTitle"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Software Engineer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="jobLevel"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Level</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Senior" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex space-x-4">
        <FormField
          control={form.control}
          name="salaryMin"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Minimum Salary</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salaryMax"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Maximum Salary</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="flex space-x-4">
        <FormField
          control={form.control}
          name="experienceMin"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Minimum Experience (years)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experienceMax"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Maximum Experience (years)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormLabel>Job Types</FormLabel>
        <Input />
      </div>

      <div>
        <FormLabel>Workplace Types</FormLabel>
        <Input />
      </div>

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Description</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter job description" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="benefits"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Job Benefits</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter job benefits" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex">
        <Button type="submit" className="flex-[1]">
          Save Job
        </Button>
      </div>
    </Form>
  );
}

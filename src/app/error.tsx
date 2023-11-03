"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { githubLink } from "@/utils/constants";
import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="lg:text-5xl text-4xl">
            Something went wrong
          </CardTitle>
          <CardDescription>{error.message}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-center flex-col">
          <div>
            Please post an issue at the
            <Button asChild variant="link" className="p-1">
              <Link href={githubLink}>Github Page</Link>
            </Button>
          </div>
          <Button asChild>
            <Link href="/">Go Back</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Section from "@/templates/Section";

export default async function Home() {
  return (
    <main className="container h-full w-full">
      <Tabs defaultValue="top">
        <TabsList>
          <TabsTrigger value="top">Top</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="best">Best</TabsTrigger>
          <TabsTrigger value="ask">Ask</TabsTrigger>
          <TabsTrigger value="show">Show</TabsTrigger>
          <TabsTrigger value="job">Job</TabsTrigger>
        </TabsList>
        <TabsContent value="top">
          <Section section="topstories" />
        </TabsContent>
        <TabsContent value="new">
          <Section section="newstories" />
        </TabsContent>
        <TabsContent value="best">best</TabsContent>
        <TabsContent value="ask">ask</TabsContent>
        <TabsContent value="show">show</TabsContent>
        <TabsContent value="job">job</TabsContent>
      </Tabs>
    </main>
  );
}

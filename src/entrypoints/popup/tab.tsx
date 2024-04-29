 
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="mocks" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="mocks">Mocks</TabsTrigger>
      <TabsTrigger value="logs">Logs</TabsTrigger>
    </TabsList>
    <TabsContent value="mocks">Make changes to your mocks here.</TabsContent>
    <TabsContent value="logs">Change your logs here.</TabsContent>
  </Tabs>
  )
}

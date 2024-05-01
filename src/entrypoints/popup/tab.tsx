import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LogsPage } from "./logs"
import { RulesPage } from "./rules"
 

export function TabsPage() {
  return (
    <>
      <Tabs defaultValue="mocks" className="w-full">
        <TabsList className="">
          <TabsTrigger value="mocks">Mocks</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="mocks"  className=""><RulesPage /></TabsContent>
        <TabsContent value="logs"   className="h-[500px]"><LogsPage /></TabsContent>
      </Tabs>
    
    </>


  )
}

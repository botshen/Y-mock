import { Button } from '@/components/ui/button';
import { TabsDemo } from './tab';
import { DataTableDemo } from './table';
import { getLogsRepo } from '@/store/Logs';
import { getRuleRepo } from '@/store/RulesRepo';




function App() {
  const test = async () => {
    const ruleRepo = getRuleRepo();
    const logRepo = getLogsRepo();
    ruleRepo.create({
      pathRule:"/1"
    }) 
    // 测试插入一些数据

  };
  return (
    <div className='w-[800px] h-[568px] p-6'>
      <Button onClick={test}>Hello</Button>
      <TabsDemo />
      <DataTableDemo />
    </div>
  );
}

export default App;

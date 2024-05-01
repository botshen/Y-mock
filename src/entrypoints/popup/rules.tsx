import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { getRuleRepo } from "@/store/RulesRepo";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const ruleRepo = getRuleRepo();
export function RulesPage() {
  const [rules, setRules] = useState<Rule[]>([]);
  const handleOperation = async (rule: Rule) => {
    await ruleRepo.delete(rule.timestamp);
    setRules(await ruleRepo.getAll());
  };
  useEffect(() => {
    const fetchRules = async () => {
      const initialLogs = await ruleRepo.getAll();
      setRules(initialLogs);
    };
    fetchRules();
  }, []);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rules.map((rule) => (
          <TableRow key={rule.timestamp}>
            <TableCell className="font-medium">{rule.timestamp}</TableCell>
            <TableCell>{rule.code}</TableCell>
            <TableCell>{rule.pathRule}</TableCell>
            <TableCell className="text-center">
              <Button onClick={() => handleOperation(rule)} size={"icon"}>
                <RiDeleteBinLine />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

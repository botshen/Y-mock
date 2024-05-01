import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { getLogsRepo } from "@/store/LogsRepo";
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const logRepo = getLogsRepo();
export function LogsPage() {
  const handleOperation = async (log: Log) => {
    await logRepo.delete(log.timestamp);
    const updatedLogs = await logRepo.getAll();
    setLogs(updatedLogs);
  }
  const [logs, setLogs] = useState<Log[]>([]);
  useEffect(() => {
    const fetchLogs = async () => {
      const initialLogs = await logRepo.getAll();
      setLogs(initialLogs);
    };
    fetchLogs();
  }, []);
  return (
    <Table >
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.map((log) => (
          <TableRow key={log.timestamp}>
            <TableCell className="font-medium">{log.timestamp}</TableCell>
            <TableCell>{log.timeText}</TableCell>
            <TableCell>{log.pathRule}</TableCell>
            <TableCell className="text-center">
              <Button variant="ghost" onClick={() => handleOperation(log)} size={"icon"}>
                <RiDeleteBinLine />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

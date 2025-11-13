import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreditCard, Download, CheckCircle } from "lucide-react";

const Payments = () => {
  const payments = [
    {
      id: "PAY-2025-001",
      course: "HSE Level II - Course Fee",
      amount: "₦150,000",
      date: "Jan 5, 2025",
      status: "Completed",
      method: "Card Payment",
    },
    {
      id: "PAY-2024-045",
      course: "NDT Level I - Course Fee",
      amount: "₦180,000",
      date: "Dec 1, 2024",
      status: "Completed",
      method: "Bank Transfer",
    },
  ];

  const totalPaid = "₦330,000";

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-heading font-bold text-primary mb-2">
          Payment History
        </h2>
        <p className="text-muted-foreground">
          View your payment records and download receipts
        </p>
      </div>

      {/* Summary Card */}
      <Card className="border-border bg-gradient-to-r from-primary/5 to-secondary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Amount Paid</p>
              <p className="text-3xl font-bold text-primary">{totalPaid}</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <CreditCard className="h-8 w-8" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Table */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Course</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-mono text-sm">{payment.id}</TableCell>
                  <TableCell>{payment.course}</TableCell>
                  <TableCell className="font-semibold">{payment.amount}</TableCell>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>
                    <Badge variant="default" className="gap-1">
                      <CheckCircle className="h-3 w-3" />
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Receipt
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;

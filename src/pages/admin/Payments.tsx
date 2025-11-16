import { useState } from "react";
import { Search, DollarSign, Download, Eye, CheckCircle, Clock, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Payment {
  id: string;
  studentName: string;
  studentEmail: string;
  course: string;
  amount: number;
  paymentDate: string;
  paymentMethod: string;
  transactionId: string;
  status: "completed" | "pending" | "failed" | "refunded";
}

const mockPayments: Payment[] = [
  {
    id: "1",
    studentName: "John Adebayo",
    studentEmail: "john.adebayo@example.com",
    course: "HSE Level I",
    amount: 75000,
    paymentDate: "2024-01-15",
    paymentMethod: "Card",
    transactionId: "TXN-2024-001",
    status: "completed",
  },
  {
    id: "2",
    studentName: "Fatima Usman",
    studentEmail: "fatima.usman@example.com",
    course: "NDT Level II - Ultrasonic Testing",
    amount: 120000,
    paymentDate: "2024-01-20",
    paymentMethod: "Bank Transfer",
    transactionId: "TXN-2024-002",
    status: "completed",
  },
  {
    id: "3",
    studentName: "Emmanuel Okafor",
    studentEmail: "emmanuel.okafor@example.com",
    course: "AutoCAD 2D/3D Design",
    amount: 95000,
    paymentDate: "2024-02-01",
    paymentMethod: "Card",
    transactionId: "TXN-2024-003",
    status: "pending",
  },
  {
    id: "4",
    studentName: "Aisha Mohammed",
    studentEmail: "aisha.mohammed@example.com",
    course: "Primavera P6",
    amount: 85000,
    paymentDate: "2024-01-18",
    paymentMethod: "Card",
    transactionId: "TXN-2024-004",
    status: "completed",
  },
];

const AdminPayments = () => {
  const [payments, setPayments] = useState<Payment[]>(mockPayments);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [viewingPayment, setViewingPayment] = useState<Payment | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.studentEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || payment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handleViewPayment = (payment: Payment) => {
    setViewingPayment(payment);
    setIsViewDialogOpen(true);
  };

  const getStatusBadge = (status: Payment["status"]) => {
    const variants = {
      completed: "default",
      pending: "secondary",
      failed: "destructive",
      refunded: "outline",
    };
    const icons = {
      completed: <CheckCircle className="h-3 w-3 mr-1" />,
      pending: <Clock className="h-3 w-3 mr-1" />,
      failed: <XCircle className="h-3 w-3 mr-1" />,
      refunded: <DollarSign className="h-3 w-3 mr-1" />,
    };
    return (
      <Badge variant={variants[status] as any} className="flex items-center w-fit">
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  const totalRevenue = payments
    .filter((p) => p.status === "completed")
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = payments
    .filter((p) => p.status === "pending")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-heading font-bold text-primary">
            Payments Management
          </h2>
          <p className="text-muted-foreground mt-1">
            Track and manage student payments and transactions
          </p>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <DollarSign className="h-4 w-4" />
            <span className="text-sm">Total Revenue</span>
          </div>
          <p className="text-2xl font-bold text-primary">{formatCurrency(totalRevenue)}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Pending Payments</span>
          </div>
          <p className="text-2xl font-bold text-yellow-600">{formatCurrency(pendingAmount)}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Completed Transactions</span>
          </div>
          <p className="text-2xl font-bold text-green-600">
            {payments.filter((p) => p.status === "completed").length}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by student, course, or transaction ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="refunded">Refunded</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="bg-card rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Course</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment Method</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>
                  <span className="font-mono text-sm">{payment.transactionId}</span>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{payment.studentName}</p>
                    <p className="text-sm text-muted-foreground">{payment.studentEmail}</p>
                  </div>
                </TableCell>
                <TableCell className="text-sm">{payment.course}</TableCell>
                <TableCell className="font-medium">{formatCurrency(payment.amount)}</TableCell>
                <TableCell className="text-sm">{payment.paymentMethod}</TableCell>
                <TableCell className="text-sm">
                  {new Date(payment.paymentDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{getStatusBadge(payment.status)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleViewPayment(payment)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    {payment.status === "completed" && (
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredPayments.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          No payments found matching your criteria.
        </div>
      )}

      {/* View Payment Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>
            <DialogDescription>
              Complete transaction information
            </DialogDescription>
          </DialogHeader>
          {viewingPayment && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-muted-foreground">Transaction ID</Label>
                  <p className="font-mono font-medium">{viewingPayment.transactionId}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Payment Date</Label>
                  <p className="font-medium">
                    {new Date(viewingPayment.paymentDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Student Name</Label>
                  <p className="font-medium">{viewingPayment.studentName}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Email</Label>
                  <p className="font-medium">{viewingPayment.studentEmail}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Course</Label>
                  <p className="font-medium">{viewingPayment.course}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Amount</Label>
                  <p className="font-bold text-lg text-primary">
                    {formatCurrency(viewingPayment.amount)}
                  </p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Payment Method</Label>
                  <p className="font-medium">{viewingPayment.paymentMethod}</p>
                </div>
                <div>
                  <Label className="text-muted-foreground">Status</Label>
                  <div className="mt-1">{getStatusBadge(viewingPayment.status)}</div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>
              Close
            </Button>
            {viewingPayment?.status === "completed" && (
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Download Receipt
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminPayments;

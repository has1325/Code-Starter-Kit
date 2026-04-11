import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: string;
}

export function ReservationModal({ isOpen, onClose, serviceType }: ReservationModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleApply = () => {
    alert(`${serviceType} 상담 신청이 접수되었습니다.`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">{serviceType} 상담 신청</DialogTitle>
          <DialogDescription className="text-muted-foreground font-light">
            상담 신청 분야: {serviceType}
          </DialogDescription>
        </DialogHeader>
        <div className="rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-muted-foreground">
          아래 정보를 남겨주시면 {serviceType} 담당자가 상담 예약을 도와드립니다.
        </div>
        <div className="grid gap-6 py-8">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium">이름</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-b border-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
              placeholder="홍길동"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact" className="text-sm font-medium">연락처</Label>
            <Input
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="bg-transparent border-b border-0 border-border rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
              placeholder="010-0000-0000"
            />
          </div>
        </div>
        <DialogFooter className="flex-col sm:flex-row gap-3 sm:gap-0">
          <Button variant="outline" onClick={onClose} className="rounded-full w-full sm:w-auto border-border">
            닫기
          </Button>
          <Button onClick={handleApply} className="rounded-full w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90">
            신청하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

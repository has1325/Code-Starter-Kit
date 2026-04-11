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

  const handlePayment = () => {
    alert("여기에 카카오페이 / 토스 결제 연동 가능");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light">{serviceType} 예약</DialogTitle>
          <DialogDescription className="text-muted-foreground font-light">
            아래 정보를 입력해주시면 결제 페이지로 이동합니다.
          </DialogDescription>
        </DialogHeader>
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
          <Button onClick={handlePayment} className="rounded-full w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90">
            결제하기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

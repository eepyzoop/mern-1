"use client";

import { useTransition } from "react";
import { updateStatus } from "@/app/admin/actions";

const STATUSES = ["Pending", "Done", "Completed", "Resolved"];

export default function StatusSelect({ id, status }: { id: string; status: string }) {
  const [pending, startTransition] = useTransition();

  return (
    <select
      className="status-select"
      defaultValue={status}
      disabled={pending}
      onChange={(e) => startTransition(() => updateStatus(id, e.target.value))}
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}

"use server";
import { NCM } from "@/core/entities/ncm";
import { securityProcedure } from "../procedure";
import { z } from "zod";
import { db } from "@/core/database";
import { ncms } from "@/core/database/schemas";

export const listNCMAction = securityProcedure
  .output(z.array(NCM))
  .handler(async () => {
    const response = await db.select().from(ncms);
    return response;
  });

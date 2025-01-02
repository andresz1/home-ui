import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Document = GetTypeByName<typeof configuration, "documents">;
export declare const allDocuments: Array<Document>;

export {};

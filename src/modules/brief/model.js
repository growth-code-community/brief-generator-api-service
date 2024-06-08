import mongoose, { Schema } from "mongoose";

const briefRequestSchema = new Schema(
  {
    userAgent: {
      type: String,
    },

    type: {
      type: String,
      required: true,
    },

    industry: {
      type: String,
      required: true,
    },

    custom_prompt: {
      type: String,
    },
  },
  { timestamps: true }
);

const briefResponseSchema = new Schema(
  {
    brief_id: {
      type: mongoose.Types.ObjectId,
      ref: "briefRequestSchema",
    },

    brief_response: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const BriefRequest = mongoose.model("BriefRequest", briefRequestSchema);
export const BriefResponse = mongoose.model("BriefResponse", briefResponseSchema);

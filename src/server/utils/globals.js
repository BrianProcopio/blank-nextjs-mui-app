export const SCHEMA_RESPONSE_OPTIONS = Object.freeze({
  getters: true,
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    delete ret._id;
  }
});

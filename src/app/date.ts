const ActionDate: {
  date: Date;
  count: number;
} = {
  date: new Date(),
  count: 0,
};

export interface Data extends Array<typeof ActionDate> {}

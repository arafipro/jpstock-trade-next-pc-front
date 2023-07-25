type Code = {
  code: number;
};

type CodeProps = {
  code?: number;
  onSubmit: (data: Code) => void;
  onTrade?: boolean;
};

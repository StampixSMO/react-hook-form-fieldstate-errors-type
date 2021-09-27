import "./styles.css";
import { NestedValue, useForm, Controller } from "react-hook-form";
import { VFC } from "react";

interface PhoneNumber {
  country: string;
  number: string;
}
type FormData = {
  phoneNumber: NestedValue<PhoneNumber>;
};

interface PhoneNumberInputProps {
  value: PhoneNumber;
  onChange: (value: PhoneNumber) => void;
  error?: string;
}
const PhoneNumberInput: VFC<PhoneNumberInputProps> = (
  props: PhoneNumberInputProps
) => {
  // This should return some fancy component to input a phone number
  return <div />;
};

export default function App() {
  const { control } = useForm<FormData>({
    defaultValues: {
      phoneNumber: {
        country: "UK",
        number: ""
      }
    }
  });
  return (
    <div className="App">
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, value }, fieldState: { error } }) => {
          return (
            <PhoneNumberInput
              value={value}
              onChange={onChange}
              error={error?.message}
            />
          );
        }}
      />
    </div>
  );
}

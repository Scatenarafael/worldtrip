//@ts-ignore
import ReactCountryFlag from "react-country-flag";

export function Flag({ countryCode }: { countryCode: string }) {
  return (
    <>
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          width: "2em",
          height: "2em",
          borderRadius:"2.5em",
        }}
        title={countryCode}
      />
    </>
  );
}

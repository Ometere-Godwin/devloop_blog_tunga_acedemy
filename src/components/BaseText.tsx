interface BaseTextProps {
  text: string;
  subText: string;
  description: string;
  quote?: string;
  quoteName?: string;
  description2?: string;
}

export default function BaseText({
  text,
  subText,
  description,
  quote,
  quoteName,
  description2,
}: BaseTextProps) {
  return (
    <div className="flex flex-col">
      <div>
        <p>{text}</p>
        <p>{subText}</p>
      </div>
      <div className="flex items-center">
        <p>{description}</p>
      </div>
      <div>
        <div className="w-[0.2px] bg-red-400" />
        <p>{quote}</p>
        <label>{quoteName}</label>
        <p>{description2}</p>
      </div>
    </div>
  );
}

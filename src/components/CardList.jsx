import Card from "./Card";
import data from "../../data.json";

export default function CardList() {
  return (
    <div className="flex flex-wrap justify-center mt-[150px] gap-10">
      {data.data.map((d) => (
        <Card key={d.id} data={d} />
      ))}
    </div>
  );
}

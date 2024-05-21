import {
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { PointCard } from "../points/PointCard";
import { PointDetails } from "../points/PointDetails";
import { interestPoints as data } from "../../utils/data";
import { useAppStore } from "../../store/useApp";

export const Finder = () => {
  const { map, selectedPoint, setSelectedPoint } = useAppStore(
    (state) => state,
  );

  const onSelectionChange = (key: React.Key) => {
    const find = data.find((point) => point.id == key);
    if (!find) return console.log("Point not found");
    setSelectedPoint(find);
    map!.flyTo({ center: [find.lng, find.lat], zoom: 16 });
  };

  const onInputChange = (value: string) => {
    // TODO: On search update list, first implement a debounce
    console.log(value);
  };

  return (
    <Card
      className="w-5/6 mx-6 md:m-0 md:w-[45vw] bg-background/70 backdrop-blur h-full"
      shadow="lg"
    >
      <CardHeader>
        <Autocomplete
          label="Select an interest point"
          onSelectionChange={onSelectionChange}
          onInputChange={onInputChange}
        >
          {data.map((point) => (
            <AutocompleteItem key={point.id} value={point.value}>
              {point.name}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </CardHeader>
      <CardBody>
        {selectedPoint ? (
          <PointDetails />
        ) : (
          <div className="grid grid-cols-2 grid-flow-row gap-4">
            {data.map((point) => (
              <PointCard key={point.id} point={point} />
            ))}
          </div>
        )}
      </CardBody>
      <Divider />
      <CardFooter className="text-xs text-gray-600">
        {data.length} interest points found nearby.
      </CardFooter>
    </Card>
  );
};

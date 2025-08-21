import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function header() {
  return (
    <header>
      <Card>
        <CardHeader> 
          <CardTitle className="text-2xl font-semi-bold"> 
            Who again?
          </CardTitle>
        </CardHeader>
      </Card>
    </header>
  );
}

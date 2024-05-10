import { Card, CardContent } from "../ui/card";

interface UserCardProps {
  title: string;
  description: string;
  name: string;
}

export default function UserCard({ title, description, name }: UserCardProps) {
  return (
    <>
      <Card className="pt-6">
        <CardContent className="space-y-4">
          <blockquote className="text-lg font-semibold leading-snug">
            {description}
          </blockquote>
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {title}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

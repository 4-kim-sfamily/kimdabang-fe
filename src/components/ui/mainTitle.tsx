export default function MainTitle({
  title = "title",
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <h3 className="title">{title}</h3>
      {description ? <p className="description">{description}</p> : null}
    </>
  );
}

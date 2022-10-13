import Skeleton from "@mui/material/Skeleton";

export default function SkeletonCard() {
  return (
    <div className={`h-[390px] w-[300px] rounded-lg shadow-md cursor-pointer`}>
      <Skeleton animation="wave" variant="rounded" width="100%">
        <div style={{ paddingTop: "200px" }} />
      </Skeleton>
      <div className="card-details mx-7 my-6">
        <h2 className="font-extrabold my-4 text-lg"></h2>
        <Skeleton animation="wave" sx={{ width: "60%" }} className="my-4"/>

        <div className="card-country-details flex flex-col gap-1 text-sm">
          <Skeleton animation="wave" height={20} />
          <Skeleton animation="wave" height={20} />
        </div>
      </div>
    </div>
  );
}

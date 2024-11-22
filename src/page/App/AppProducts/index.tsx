import AppProductItem from "components/AppComponents/AppProductItem";
import { useParams } from "react-router-dom";
import { useGetListPorductQuery } from "store/api/productApi";
import { IPorduct } from "type/Product";
import { Response } from "type/Response";
import "./appProducts.scss"
export default function AppProudcts() {
  let { id } = useParams();
  const data = useGetListPorductQuery(id ? id : "") as Response<
    IPorduct[],
    unknown
  >;
  console.log(data);
  return (
    <div  className="AppProducts">
      {data.data &&
        data.data.data.map((elem) => <AppProductItem data={elem} />)}
    </div>
  );
}

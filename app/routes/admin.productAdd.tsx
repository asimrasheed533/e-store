import Input from "~/components/Input";
import PictureInput from "~/components/PictureInput";
import Select from "~/components/Select";

export default function ProductAdd() {
  return (
    <div className="add__product__container">
      {/* <div className="products__image__warper">
      </div> */}
      <div className="products__entries__warper">
        <PictureInput label="Product Image" onChange={() => {}} />
        <div className="input__entry__add__row">
          <Input label="Product Name" name="name" />
          <Input label="Product Name" name="name" />
          <Input label="Product Name" name="name" />
        </div>
        <div className="input__entry__add__row">
          <Select
            options={[{ label: "Option 1", value: "option1" }]}
            label="Product Category"
          />
        </div>
      </div>
    </div>
  );
}

import Input from "~/components/Input";
import PictureInput from "~/components/PictureInput";
import Select from "~/components/Select";

export default function ProductAdd() {
  return (
    <div className="add__product__container">
      {/* <div className="products__image__warper">
      </div> */}
      <div className="products__entries__warper">
        <div className="input__entry__add__row">
          <Input label="Product Name" name="name" />
          <Input label="Product Name" name="name" />
          <Input label="Product Name" name="name" />
        </div>
        <div className="input__entry__add__row">
          <Select
            label="Product Category"
            options={[
              { value: "category1", label: "Category 1" },
              { value: "category2", label: "Category 2" },
              { value: "category3", label: "Category 3" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default function PictureInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value?: File | null | string;
  onChange: (file: File) => void;
}) {
  return (
    <div className="create__user__section__image__upload">
      <div className="create__user__section__image__upload__inner">
        {!value && (
          <>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 8C3.5 8.55 3.95 9 4.5 9C5.05 9 5.5 8.55 5.5 8V6H7.5C8.05 6 8.5 5.55 8.5 5C8.5 4.45 8.05 4 7.5 4H5.5V2C5.5 1.45 5.05 1 4.5 1C3.95 1 3.5 1.45 3.5 2V4H1.5C0.95 4 0.5 4.45 0.5 5C0.5 5.55 0.95 6 1.5 6H3.5V8Z"
                fill="#637381"
              />
              <circle cx="13.5" cy="14" r="3" fill="#637381" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.33 6H21.5C22.6 6 23.5 6.9 23.5 8V20C23.5 21.1 22.6 22 21.5 22H5.5C4.4 22 3.5 21.1 3.5 20V9.72C3.8 9.89 4.13 10 4.5 10C5.6 10 6.5 9.1 6.5 8V7H7.5C8.6 7 9.5 6.1 9.5 5C9.5 4.63 9.39 4.3 9.22 4H15.62C16.18 4 16.72 4.24 17.09 4.65L18.33 6ZM8.5 14C8.5 16.76 10.74 19 13.5 19C16.26 19 18.5 16.76 18.5 14C18.5 11.24 16.26 9 13.5 9C10.74 9 8.5 11.24 8.5 14Z"
                fill="#637381"
              />
            </svg>
            {label}
          </>
        )}
        <input
          type="file"
          onChange={(e) =>
            e.target.files && e.target.files[0] && onChange(e.target.files[0])
          }
          className="create__user__section__image__upload__inner__input"
        />
        {value && (
          <img
            loading="lazy"
            src={value instanceof File ? URL.createObjectURL(value) : value}
            className="create__user__section__image__upload__inner__preview"
            height={140}
            width={140}
            alt="picture Preview"
          />
        )}
      </div>
    </div>
  );
}

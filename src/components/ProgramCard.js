export default function ProgramCard({
  logo,
  title,
  description,
  buttonText,
  buttonIcon,
  onButtonClick,
  logoSize = 48,
}) {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 max-w-md w-full space-y-4 flex flex-col justify-center items-center">
      <div className="flex flex-row items-center gap-4">
        {title && (
          <h2
            className="text-xl font-semibold break-words"
            style={{
              maxWidth: "150px",
              color: "#B089DD",
              textAlign: "center",
              fontSize: "1.4rem",
            }}
          >
            {title}
          </h2>
        )}

        <img
          src={logo}
          alt={!title ? `Logo of ${title}` : "Logo of the program"}
          style={{ width: logoSize, height: 150, objectFit: "contain" }}
        />
      </div>
      <p
        className="text-gray-700 text-center whitespace-pre-line"
        style={{
          minHeight: "4.5rem",
        }}
      >
        {description}
      </p>

      <button
        onClick={onButtonClick}
        className="mt-4 px-4 py-2 text-white flex items-center gap-2"
        style={{ backgroundColor: "#B089DD", borderRadius: "50px" }}
      >
        {buttonIcon && (
          <img src={buttonIcon} alt="Button icon" className="w-5 h-5" />
        )}
        {buttonText}
      </button>
    </div>
  );
}

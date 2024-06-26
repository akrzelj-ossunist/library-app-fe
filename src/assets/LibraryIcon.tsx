function LibraryIcon(props: any) {
  return (
    <svg
      viewBox="0 0 17 16"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 15v-1h-1V8h1V7h-3v1h1v6h-3V8h1V7H9v1h1v6H7V8h1V7H5v1h1v6H3V8h1V7H1v1h1v6H1v1H0v1h17v-1h-1zM8 0h1l8 5v1H0V5l8-5z"
      />
    </svg>
  );
}

export default LibraryIcon;
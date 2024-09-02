"use client";

export default function Cart({ color }: { color?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4 8.3999H6V9.5999H20.4V8.3999Z"
        fill={color ? color : "white"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 19.2001C6 20.5201 7.08 21.6 8.4 21.6C9.72 21.6 10.8 20.5201 10.8 19.2001C10.8 17.8801 9.72 16.8 8.4 16.8C7.08 16.8 6 17.8801 6 19.2001ZM7.20004 19.2001C7.20004 18.4801 7.68004 18 8.40004 18C9.12004 18 9.60004 18.4801 9.60004 19.2001C9.60004 19.9201 9.12004 20.4 8.40004 20.4C7.68004 20.4 7.20004 19.9201 7.20004 19.2001Z"
        fill={color ? color : "white"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6001 19.2001C15.6001 20.5201 16.6801 21.6 18.0001 21.6C19.3201 21.6 20.4001 20.5201 20.4001 19.2001C20.4001 17.8801 19.3201 16.8 18.0001 16.8C16.6801 16.8 15.6001 17.8801 15.6001 19.2001ZM16.8002 19.2001C16.8002 18.4801 17.2802 18 18.0002 18C18.7202 18 19.2002 18.4801 19.2002 19.2001C19.2002 19.9201 18.7202 20.4 18.0002 20.4C17.2802 20.4 16.8002 19.9201 16.8002 19.2001Z"
        fill={color ? color : "white"}
      />
      <path
        d="M19.0799 15.6001H7.31995L4.07995 4.8001H1.19995V3.6001H5.03995L8.27995 14.4001H18.1199L20.3999 7.0801L21.5999 7.3201L19.0799 15.6001Z"
        fill={color ? color : "white"}
      />
    </svg>
  );
}

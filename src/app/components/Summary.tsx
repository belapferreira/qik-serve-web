export const Summary = () => {
  return (
    <div className="flex h-max flex-col bg-white shadow-[0px_2px_14px_0px_#00000026]">
      <div className="bg-foreground p-[1.375rem] pl-6 text-2xl text-gray-600">
        <h2>Cart</h2>
      </div>

      <div className="p-6">
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    </div>
  );
};

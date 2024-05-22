import React from "react";

function page() {
  return (
    <div>
      <div class="mx-auto max-w-md">
        <h3 class="my-2">Fixed in bottom right</h3>
        <div class="relative h-40 max-w-md bg-blue-50">
          <div class="absolute right-0 bottom-0 h-20 w-20 rounded bg-blue-500"></div>
        </div>
      </div>

      <div class="mx-auto max-w-md">
        <h3 class="my-2">Fixed in Center</h3>
        <div class="flex h-40 max-w-md items-center justify-center bg-blue-50">
          <div class="h-20 w-20 rounded bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
}

export default page;

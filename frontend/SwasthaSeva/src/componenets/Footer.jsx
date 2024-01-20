
 
export function Footer() {
  return (
  
<div class=" w-screen">

<footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-[#00a0a0]">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="#" target="_blank" class="flex items-center mb-4 sm:mb-0">
            
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Swastha Seva</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
            <li>
                <a href="#" class="mr-4 text-sm text-white hover:underline md:mr-6 dark:text-white">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 text-sm text-white hover:underline md:mr-6 dark:text-white">Privacy
                    Policy</a>
            </li>
            <li>
                <a href="#"
                    class="mr-4 text-sm text-white hover:underline md:mr-6 dark:text-white">Licensing</a>
            </li>
            <li>
                <a href="#" class="text-sm text-white hover:underline dark:text-white">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-white sm:mx-auto dark:border-white lg:my-8" />
    <span class="block text-sm text-white sm:text-center dark:text-white">© 2024 <a href="#" target="_blank" class="hover:underline">Swastha Seva™</a>. All Rights Reserved.
</span>
</footer>


</div>
  );
}
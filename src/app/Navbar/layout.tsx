'use client'

import { useEffect, useRef, useState } from 'react'


import logo from '../../Images/brand.svg';

import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  AtSymbolIcon,
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
  CreditCardIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  PencilIcon,
  PencilSquareIcon,
  RectangleStackIcon,
  UserGroupIcon,
  VideoCameraIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'



const About = [
  { name: 'About US', description: '', href: '/about', icon: UserGroupIcon },
  { name: 'Privacy Policy', description: '', href: '/privacy-policy', icon: DocumentCheckIcon }
]


const theNews = [
  { name: 'Artical/block', description: '', href: '/artical', icon: RectangleStackIcon }
]

const bulksms = [
  { name: 'Bulk sms', description: '', href: '/bulksms', icon: ChatBubbleLeftRightIcon },
  { name: 'Promotional sms', description: '', href: '/promotional', icon: ChatBubbleOvalLeftEllipsisIcon },
  { name: 'Transactional sms', description: '', href: '/transactional', icon: CreditCardIcon },
  { name: 'Email Marketing sms', description: '', href: '/email', icon: AtSymbolIcon },
  { name: 'whatsapp', description: '', href: '/whatsapp', icon: ChatBubbleOvalLeftIcon }
]

const portfolio = [
  { name: 'website', description: '', href: '', icon: GlobeAltIcon }
]

const services = [
  { name: 'Design & Developement', description: '', href: '/design', icon: GlobeAltIcon },
  { name: 'search Engine Optimization', description: '', href: '/serch-engine-optimization', icon: GlobeAltIcon },
  { name: 'social media marketing', description: '', href: '/social-media-marketing', icon: PencilIcon },
  { name: 'google ads', description: '', href: '/google-ads', icon: GlobeAltIcon },
  { name: 'social media ads', description: '', href: '', icon: PencilIcon },
  { name: 'content writing', description: '', href: '/content-writing', icon: PencilSquareIcon }
]



export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activePopover, setActivePopover] = useState<string | null>(null);
  function toggleButton(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(e);
      setActivePopover(e.currentTarget.name)
  }
  const popoverRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handileClickOutSide(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setActivePopover(null)
      }
    }
    document.addEventListener('click', handileClickOutSide);
    return () => {
      document.removeEventListener('click', handileClickOutSide);
    };


  });
  // function hello(e:React.MouseEvent<HTMLDivElement>){
  //   console.log(e);
    
  // }
  return (
    <header className="bg-white" ref={popoverRef}>
      <nav aria-label="Global" id='Navbar' className="dark:bg-[#061127] p-3 fixed z-10 transition-all duration-300 w-full mx-auto flex  items-center justify-between  lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="#" className="">
            <Image
              alt=""
              src={logo}
              className='w-[10vw]'
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          <Link href="/" className=" text-base font-semibold text-gray-900 ">
            <span className='text-[#ffee32]  hover:text-[#ffd100]   underline-animate cursor-pointer '>Home</span>
          </Link>
          <Popover className="relative"  >
            <PopoverButton name='about'  className=" text-[#ffee32] hover:text-[#ffd100]  cursor-pointer  cursor-pointer flex items-center gap-x-1 text-base font-semibold text-gray-900" onMouseEnter={toggleButton}>
              <span className='text-[#ffee32] hover:text-[#ffd100]  underline-animate cursor-pointer'>About us</span>
              <ChevronDownIcon aria-hidden="true" className={`${activePopover == 'about' ?  `size-5 flex-none text-gray-400 rotate-180` : `size-5 flex-none text-gray-400`}`} />
            </PopoverButton>

            <Transition show={activePopover === 'about'}>
              <PopoverPanel onMouseLeave={() => setActivePopover(null)}
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="">
                  {About.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg P-1 text-base hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex text-[#ffee32] hover:text-[#ffd100]   cursor-pointer decoration-[#ba181b] items-center gap-x-1 text-base font-semibold text-gray-900" name='service' onMouseEnter={toggleButton}>
              <span className='text-[#ffee32] hover:text-[#ffd100]  underline-animate cursor-pointer decoration-[#ba181b]'>Our Services</span>

              <ChevronDownIcon aria-hidden="true" className={`${activePopover == 'service' ?  `size-5 flex-none text-gray-400 rotate-180` : `size-5 flex-none text-gray-400`}`} />
            </PopoverButton>

            <Transition show={activePopover === 'service'}>
              <PopoverPanel
                onMouseLeave={() => setActivePopover(null)}
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="P-1">
                  {services.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg P-1 text-base hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </PopoverPanel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="text-[#ffee32] hover:text-[#ffd100]  cursor-pointer  flex items-center gap-x-1 text-base font-semibold text-gray-900" name='news' onMouseEnter={toggleButton}>
              <span className='text-[#ffee32] hover:text-[#ffd100]  underline-animate cursor-pointer decoration-[#ba181b]'>The News</span>
              <ChevronDownIcon aria-hidden="true" className={`${activePopover == 'news' ?  `size-5 flex-none text-gray-400 rotate-180` : `size-5 flex-none text-gray-400`}`} />
            </PopoverButton>

            <Transition show={activePopover === 'news'}>
              <PopoverPanel
                onMouseLeave={() => setActivePopover(null)}
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="P-1">
                  {theNews.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg P-1 text-base hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="text-[#ffee32] hover:text-[#ffd100]   cursor-pointer decoration-[#ba181b] flex items-center gap-x-1 text-base font-semibold text-gray-900" name='sms' onMouseEnter={toggleButton}>
              <span className='text-[#ffee32] hover:text-[#ffd100] underline-animate cursor-pointer decoration-[#ba181b]'>BULK SMS</span>

              <ChevronDownIcon aria-hidden="true" className={`${activePopover == 'sms' ?  `size-5 flex-none text-gray-400 rotate-180` : `size-5 flex-none text-gray-400`}`} />
            </PopoverButton>

            <Transition show={activePopover === 'sms'}>
              <PopoverPanel
                onMouseLeave={() => setActivePopover(null)}
                className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="P-1">
                  {bulksms.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg P-1 text-base hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="text-[#ffee32] hover:text-[#ffd100]   cursor-pointer decoration-[#ba181b] flex items-center gap-x-1 text-base font-semibold text-gray-900" name='portfolio' onMouseEnter={toggleButton}>
              <span className='text-[#ffee32] hover:text-[#ffd100]  underline-animate cursor-pointer decoration-[#ba181b]'>Our Portfolio</span>

              <ChevronDownIcon aria-hidden="true" className={`${activePopover == 'portfolio' ?  `size-5 flex-none text-gray-400 rotate-180` : `size-5 flex-none text-gray-400`}`} />
            </PopoverButton>

            <Transition show={activePopover === 'portfolio'}>
              <PopoverPanel
              onMouseLeave={() => setActivePopover(null)}
                className="absolute left-1/2 z-10 mt-3 w-90 max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="P-1">
                  {portfolio.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg P-1 text-base hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </PopoverPanel>
            </Transition>
          </Popover>

          <Link href="/contactUS" className="text-[#ffee32] hover:text-[#ffd100] cursor-pointer decoration-[#ba181b] text-base font-semibold text-gray-900">
            <span className='text-[#ffee32] hover:text-[#ffd100]  underline-animate cursor-pointer decoration-[#ba181b]'>Contact US</span>

          </Link>
        </PopoverGroup>

      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 " />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src={logo}
                className="h-20 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

                <Link
                  href="\"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    About US
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...About].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Our Service
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...services].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    The News
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...theNews].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Bulk Sms
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...bulksms].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Our Portfolio
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...portfolio].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  href="\contactUS"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact US
                </Link>



              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
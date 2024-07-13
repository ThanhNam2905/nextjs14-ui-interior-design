'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/react';
import { useState } from 'react';
import { TbArrowUpRight } from 'react-icons/tb';

function classNames(...classes) {
  return classes.filter(Boolean).join('');
}

export default function Page() {
  const [agreed, setAgreed] = useState(true);
  return (
    <div className="container py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-wide md:text-4xl">
          Contact sales
        </h1>
        <p className="mt-2.5 md:mt-4 text-lg leading-8 text-muted-foreground">
          Please feel free to ask anything
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-4xl mt:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div className="mt-1">
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="w-full px-6"
            />
          </div>
          <div className="mt-1">
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="w-full px-6"
            />
          </div>
          <div className="mt-1">
            <Input
              type="number"
              id="phoneNumber"
              placeholder="Number Phone"
              className="w-full px-6"
            />
          </div>
          <div className="mt-1">
            <Input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full px-6"
            />
          </div>
          <div className="sm:col-span-2 mt-1">
            <Textarea
              type="text"
              id="messenger"
              placeholder="Please write messenger your here..."
              className="py-4 px-6 h-40"
            />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-x-5">
          <Switch
            checked={agreed}
            onChange={setAgreed}
            className={`${agreed ? 'bg-primary' : 'bg-gray-200'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
          >
            <span className="sr-only">Agree to policies</span>
            <span
              aria-hidden="true"
              className={`${agreed ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
          <div className="text-sm leading-6 text-gray-600">
            By selecting this, you agree to ou{' '}
            <a href="#" className="font-semibold text-primary">
              privacy & policy
            </a>
          </div>
        </div>

        <div className="mt-10">
          <Button
            type="submit"
            className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2"
          >
            Let's Talk <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  );
}

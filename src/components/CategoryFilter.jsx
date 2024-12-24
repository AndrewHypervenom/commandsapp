import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'git', name: 'Git' },
  { id: 'linux', name: 'Linux' },
  { id: 'python', name: 'Python' },
  { id: 'docker', name: 'Docker' },
  { id: 'powershell', name: 'PowerShell' },
  { id: 'postgresql', name: 'PostgreSQL' },
  { id: 'apache', name: 'Apache' },
  { id: 'nginx', name: 'Nginx' },
  { id: 'openssl', name: 'OpenSSL' },
  { id: 'letsencrypt', name: "Let's Encrypt" },
  { id: 'ssh', name: 'SSH' }
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const { isDark } = useTheme();
  const selected = categories.find(cat => cat.id === selectedCategory) || categories[0];

  return (
    <div className="w-72">
      <Listbox value={selected} onChange={(category) => onCategoryChange(category.id)}>
        <div className="relative mt-1">
          <Listbox.Button className={`
            relative w-full cursor-pointer rounded-lg py-3 pl-4 pr-10 text-left
            ${isDark ? 
              'bg-gray-800 text-gray-200 hover:bg-gray-700' : 
              'bg-white text-gray-900 hover:bg-gray-50'}
            border ${isDark ? 'border-gray-700' : 'border-gray-200'}
            focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
            shadow-sm hover:shadow transition-all duration-200
          `}>
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={`
              absolute mt-1 max-h-60 w-full overflow-auto rounded-lg py-1 text-base shadow-lg 
              ring-1 ring-black ring-opacity-5 focus:outline-none z-50
              ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white'}
            `}>
              {categories.map((category) => (
                <Listbox.Option
                  key={category.id}
                  className={({ active }) => `
                    relative cursor-pointer select-none py-2 pl-10 pr-4
                    ${active ? 
                      'bg-indigo-500 text-white' : 
                      isDark ? 'text-gray-200' : 'text-gray-900'}
                  `}
                  value={category}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {category.name}
                      </span>
                      {selected ? (
                        <span className={`
                          absolute inset-y-0 left-0 flex items-center pl-3
                          ${active ? 'text-white' : 'text-indigo-500'}
                        `}>
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CategoryFilter;
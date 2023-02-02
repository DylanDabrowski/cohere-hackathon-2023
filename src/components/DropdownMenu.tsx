import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

const rappers = ["Drake", "Kanye", "Future", "Young Thug"];

export default function DropdownMenu({ setRapper }: any) {
  return (
    <Select.Root onValueChange={(value) => setRapper(value)}>
      <Select.Trigger className="bg-white p-2 rounded-lg inline-flex items-center justify-between shadow-lg text-sm">
        <Select.Value placeholder="Select a Rapper" />
        <Select.Icon className="">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-1">
            <Select.Group>
              <Select.Label className="text-xs leading-6 text-gray-400">
                Rappers
              </Select.Label>
              {rappers.map((rapper) => (
                <SelectItem
                  key={rapper}
                  value={rapper}
                  className="text-lg flex items-center select-none w-50"
                >
                  {rapper}
                </SelectItem>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white cursor-default">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("SelectItem", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

import Link from 'next/link';
import React from 'react';

export default function DropdownLink(props) {
  let { href, children, ...rest } = props;
  return (
    <div className="w-full z-2">
      <Link href={href} legacyBehavior>
        <a {...rest}>{children}</a>
      </Link>
    </div>
  );
}

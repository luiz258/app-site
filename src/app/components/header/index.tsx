

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]
export function HeaderComponent() {
  return (
    <header className="absolute">
      <div className="flex justify-around justify-items-center px-6">
          <div className="flex w-14 h-14">
            <span>Logo</span>
          </div>
            <ul className="flex justify-around font__dmSans font__color-gray h-auto gap-4">
              <li>
                <a href="#">Home </a>
              </li>
              <li>
                <a href="#">About </a>
              </li>
              <li>
                <a href="#">Tech Stack</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
    </header>
  );
}
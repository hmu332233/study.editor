import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-2 flex-col">
        <Link className='link' href="/blocknote">blocknote</Link>
        <Link className='link' href="/tiptap">tiptap</Link>
        <Link className='link' href="/editorjs">editorjs</Link>
      </div>
    </main>
  )
}

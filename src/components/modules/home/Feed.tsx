import { Posts } from '@/dev-data/dummyData';
import Share from './Share';
import Tips from './Tips';

export default function Feed() {
  return (
    <div className="flex-[5.5]">
      <div className="p-5">
        <Share />
        {Posts.map((p) => (
          <Tips key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

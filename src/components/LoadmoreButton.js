/**
 * @author William Pan <williampan@zhelang.com.tw>
 */

'use client'


export default function LoadMoreButton({ onClick }) {
  return (
    <div 
      className="loadmore"
      onClick={onClick}
    >
      載入更多
    </div>
  );
}
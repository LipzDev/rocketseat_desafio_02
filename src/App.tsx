import { SideBar } from './components/SideBar';
import { useEffect, useState } from 'react';
import { Content } from './components/Content';
import { api } from './services/api';
import './styles/global.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return <div style={{ display: 'flex' }}>
  <SideBar 
    setSelectedGenreId={setSelectedGenreId} 
    selectedGenreId={selectedGenreId}
  />
  <Content selectedGenreId={selectedGenreId}
    selectedGenre={selectedGenre} 
  />
</div>
  
}
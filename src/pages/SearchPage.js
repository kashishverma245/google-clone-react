import React from 'react'
import './SearchPage.css'
import { Link } from "react-router-dom" ;
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import Response from './response';
import Search from './Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
    const [{ term='tesla' }, dispatch] = useStateValue();

    // LIVE API cALL
    const { data }  = useGoogleSearch(term);

    // Mock API call
    //const data = Response;

    console.log(data)
    return (
    <div className='searchPage'>
        <div className='searchPage__header'>
          <Link to="/">
            <img className="searchPage__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=''/>
          </Link>
           
        <div className='searchPage__headerBody'>
          <Search hideButtons />

          <div className='searchPage_options'>
             < div className='searchPage_optionsLeft'>
              <div className='searchPage_options'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='searchPage_options'>
                <DescriptionIcon/>
                <Link to='/news'>News</Link>
              </div>
              <div className='searchPage_options'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='searchPage_options'>
                <LocalOfferIcon />
                <Link to='/shopping'>shopping</Link>
             </div>
             <div className='searchPage_options'>
                <RoomIcon />
                <Link to='/maps'>maps</Link>
                </div>
                <div className='searchPage_options'>
                <MoreVertIcon />
                <Link to='/more'>more</Link>
                </div>

             <div className='searchPage_optionsRight'>
                <div className='searchPage_options'>
                <Link to='/settings'>Settings</Link>
                </div>
                <div className='searchPage_options'>
                <Link to='/tools'>Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      { true  && (
        <div className='searchPage_results'>

        <p className='searchPage_resultCount'>
          About {data?.searchInformation.formattedTotalResults}
          results ({data?.searchInformation.formattedSearchTime}seconds) for {term}
        </p>

        {data?.items.map(item => (
          <div className='searchPage_result'>
            <a href={item.link} target='_blank'> {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
              <img 
                  className='searchPage_resultImage' 
                  src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                  alt=''
            /> 
            )}
            {item.displayLink}</a>

            <a className="searchPage_resultTitle" href={item.link} target='_blank'>
              <h2>{item.title}</h2>
            </a>
            <p className='searchPage_resultSnippet'>{item.snippet}</p>
            </div>
        ))}
        </div>

      )}
       
        
      </div>
  )
}

export default SearchPage
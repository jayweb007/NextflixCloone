/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      title
      movies {
        items {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie {
    onCreateMovie {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      category {
        id
        title
        movies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      seasons {
        items {
          id
          name
          movieID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie {
    onUpdateMovie {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      category {
        id
        title
        movies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      seasons {
        items {
          id
          name
          movieID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie {
    onDeleteMovie {
      id
      title
      poster
      year
      numberOfSeasons
      plot
      cast
      creator
      categoryID
      category {
        id
        title
        movies {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      seasons {
        items {
          id
          name
          movieID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSeason = /* GraphQL */ `
  subscription OnCreateSeason {
    onCreateSeason {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        seasons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateSeason = /* GraphQL */ `
  subscription OnUpdateSeason {
    onUpdateSeason {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        seasons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteSeason = /* GraphQL */ `
  subscription OnDeleteSeason {
    onDeleteSeason {
      id
      name
      movieID
      movie {
        id
        title
        poster
        year
        numberOfSeasons
        plot
        cast
        creator
        categoryID
        category {
          id
          title
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        seasons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      episodes {
        items {
          id
          title
          poster
          duration
          plot
          video
          seasonID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateEpisode = /* GraphQL */ `
  subscription OnCreateEpisode {
    onCreateEpisode {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        episodes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateEpisode = /* GraphQL */ `
  subscription OnUpdateEpisode {
    onUpdateEpisode {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        episodes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteEpisode = /* GraphQL */ `
  subscription OnDeleteEpisode {
    onDeleteEpisode {
      id
      title
      poster
      duration
      plot
      video
      seasonID
      season {
        id
        name
        movieID
        movie {
          id
          title
          poster
          year
          numberOfSeasons
          plot
          cast
          creator
          categoryID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        episodes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;

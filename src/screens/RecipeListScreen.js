/* eslint-disable react-native/no-inline-styles */
import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchFilter from '../components/SearchFilter';
import CategoriesFilter from '../components/CategoriesFilter';
import RecipeCard from '../components/RecipeCard';
import {faBell, faSearch} from '@fortawesome/free-solid-svg-icons';

const RecipeListScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 8}}>
      {/* render header */}
      <Header headerText={'Hi, John '} headerIcon={faBell} />

      {/* Search Filter */}
      <SearchFilter icon={faSearch} placeholder={'enter your fav recipe'} />

      {/* Categories filter */}

      <View style={{marginTop: 22}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
          Categories
        </Text>
        {/* Categories list */}
        <CategoriesFilter />
      </View>

      {/* Recipe List Filter */}

      <View style={{marginTop: 22, flex: 1}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
          Recipes
        </Text>
        {/* Recipes list */}

        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeListScreen;

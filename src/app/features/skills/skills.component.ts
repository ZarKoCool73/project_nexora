import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/directives/reveal/reveal.directive';
import {Skill, skills, Tech} from '../../core/models/skill.model';

interface FlatTech {
  name: string;
  icon: string;
  level: number;
  years: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective, FormsModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills: Skill[] = skills;

  searchTerm = '';
  selectedCategory = 'All';

  hoveredTech: Tech | null = null;

  hoverTech(tech: Tech) {
    this.hoveredTech = tech;
  }

  leaveTech() {
    this.hoveredTech = null;
  }

  // 🔥 categorías dinámicas (no hardcodeadas)
  get categories(): string[] {
    const cats = this.skills.map(s => s.name);
    return ['All', ...cats];
  }

  // 🔥 flatten dinámico
  get allTechs(): FlatTech[] {
    return this.skills.flatMap(skill =>
      skill.techs.map(tech => ({
        ...tech,
        category: skill.name
      }))
    );
  }

  // 🔥 filtro final
  get filteredTechs(): FlatTech[] {
    return this.allTechs.filter(t => {
      const matchSearch =
        t.name.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchCategory =
        this.selectedCategory === 'All' ||
        t.category === this.selectedCategory;

      return matchSearch && matchCategory;
    });
  }

  setCategory(cat: string) {
    this.selectedCategory = cat;
  }

}
